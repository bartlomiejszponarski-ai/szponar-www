import { useEffect, useRef } from 'react';

const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+-=[]{}|;:'\",.<>/?";

export const useDecodeAnimation = () => {
  const elementRef = useRef(null);

  useEffect(() => {
    if (!elementRef.current) return;

    const element = elementRef.current;
    const originalText = element.getAttribute('data-value');
    if (!originalText) return;

    let iterations = 0;
    element.innerText = "";
    element.classList.add('visible');
    element.style.opacity = 1;

    const interval = setInterval(() => {
      element.innerText = originalText
        .split("")
        .map((letter, index) => {
          if (index < iterations) {
            return originalText[index];
          }
          return chars[Math.floor(Math.random() * chars.length)];
        })
        .join("");

      if (iterations >= originalText.length) {
        clearInterval(interval);
      }

      iterations += 1 / 3;
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return elementRef;
};

export const useTypewriterAnimation = () => {
  const elementRef = useRef(null);

  useEffect(() => {
    if (!elementRef.current) return;

    const element = elementRef.current;
    const text = element.getAttribute('data-text');
    if (!text) return;

    let i = 0;
    element.innerHTML = "";

    const type = () => {
      if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
        setTimeout(type, 50);
      }
    };

    type();
  }, []);

  return elementRef;
};

export const useIntersectionAnimation = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target.classList.contains('decode-text') && !entry.target.classList.contains('anim-done')) {
            decodeEffect(entry.target);
            entry.target.classList.add('anim-done');
          }
          if (entry.target.classList.contains('typewriter') && !entry.target.classList.contains('anim-done')) {
            typewriterEffect(entry.target);
            entry.target.classList.add('anim-done');
          }
        }
      });
    }, observerOptions);

    document.querySelectorAll('.decode-text').forEach(el => {
      el.innerText = "----------------";
      observer.observe(el);
    });

    document.querySelectorAll('.typewriter').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);
};

const decodeEffect = (element) => {
  const originalText = element.getAttribute('data-value');
  let iterations = 0;

  element.innerText = "";
  element.classList.add('visible');
  element.style.opacity = 1;

  const interval = setInterval(() => {
    element.innerText = originalText
      .split("")
      .map((letter, index) => {
        if (index < iterations) {
          return originalText[index];
        }
        return chars[Math.floor(Math.random() * chars.length)];
      })
      .join("");

    if (iterations >= originalText.length) {
      clearInterval(interval);
    }

    iterations += 1 / 3;
  }, 30);
};

const typewriterEffect = (element) => {
  const text = element.getAttribute('data-text');
  let i = 0;
  element.innerHTML = "";

  const type = () => {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, 50);
    }
  };

  type();
};
