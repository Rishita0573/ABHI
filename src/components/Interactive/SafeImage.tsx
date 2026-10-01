import React, { useState, useEffect } from 'react';
import heic2any from 'heic2any';

const convertedCache = new Map<string, string>();

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  objectFit?: 'cover' | 'contain';
}

export const SafeImage: React.FC<SafeImageProps> = ({
  src,
  alt,
  objectFit = 'cover',
  className = '',
  style,
  onClick,
  onLoad
}) => {
  const [displaySrc, setDisplaySrc] = useState<string>(src);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    let isMounted = true;
    if (!src) return;

    const lowerSrc = src.toLowerCase();
    const isHeic = lowerSrc.endsWith('.heic');

    if (isHeic) {
      if (convertedCache.has(src)) {
        setDisplaySrc(convertedCache.get(src)!);
        return;
      }

      setLoading(true);
      fetch(src)
        .then((res) => {
          if (!res.ok) throw new Error(`HTTP ${res.status}`);
          return res.blob();
        })
        .then((blob) => heic2any({ blob, toType: 'image/jpeg', quality: 0.85 }))
        .then((conversionResult) => {
          if (!isMounted) return;
          const resultBlob = Array.isArray(conversionResult) ? conversionResult[0] : conversionResult;
          const objectUrl = URL.createObjectURL(resultBlob);
          convertedCache.set(src, objectUrl);
          setDisplaySrc(objectUrl);
          setLoading(false);
        })
        .catch((err) => {
          console.warn('HEIC conversion fallback for', src, err);
          if (isMounted) {
            setDisplaySrc(src);
            setLoading(false);
          }
        });
    } else {
      setDisplaySrc(src);
    }

    return () => {
      isMounted = false;
    };
  }, [src]);

  const fitClass = objectFit === 'contain' ? 'object-contain p-1' : 'object-cover';

  return (
    <div className={`relative overflow-hidden ${className}`} style={style}>
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-stone-200/90 text-rose-800 text-xs font-typewriter animate-pulse">
          ✨ Loading memory photo...
        </div>
      )}

      {error ? (
        <div className="absolute inset-0 flex items-center justify-center bg-rose-100 text-rose-800 p-3 text-center text-xs font-handwriting">
          📷 {alt || 'Photo memory'}
        </div>
      ) : (
        <img
          src={displaySrc}
          alt={alt}
          className={`w-full h-full ${fitClass} transition-opacity duration-300 ${
            loading ? 'opacity-0' : 'opacity-100'
          }`}
          onClick={onClick}
          onLoad={onLoad}
          onError={() => {
            if (!src.toLowerCase().endsWith('.heic') && !convertedCache.has(src)) {
              fetch(src)
                .then((r) => r.blob())
                .then((b) => heic2any({ blob: b, toType: 'image/jpeg' }))
                .then((res) => {
                  const b = Array.isArray(res) ? res[0] : res;
                  const url = URL.createObjectURL(b);
                  convertedCache.set(src, url);
                  setDisplaySrc(url);
                })
                .catch(() => setError(true));
            } else {
              setError(true);
            }
          }}
        />
      )}
    </div>
  );
};
