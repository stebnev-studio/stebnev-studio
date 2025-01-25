import { defineNuxtPlugin } from '#app';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { Draggable } from 'gsap/Draggable';

// Регистрация GSAP плагинов
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, Draggable);

/**
 * Настройка и инициализация Lenis
 */
function initializeLenis() {
  const lenis = new Lenis({
    duration: 1.2,         // Длительность анимации прокрутки
    smoothWheel: true
  });

  // Синхронизация Lenis и ScrollTrigger
  lenis.on('scroll', ScrollTrigger.update);

  // Интеграция с GSAP
  gsap.ticker.add((time) => lenis.raf(time * 1000));

  // Отключение сглаживания лагов в GSAP
  gsap.ticker.lagSmoothing(0);

  lenis.start();
  return lenis;
}

/**
 * Настройка ScrollTrigger по умолчанию
 */
function setupScrollTriggerDefaults() {
  ScrollTrigger.defaults({
    markers: false, // Убираем маркеры для продакшена
    scroller: document.body, // Используем Lenis как скроллер
  });
}

export default defineNuxtPlugin(() => {
  if (process.client) {
    // Инициализация Lenis
    const lenis = initializeLenis();

    // Настройка ScrollTrigger
    setupScrollTriggerDefaults();

    // Предоставляем GSAP и Lenis через provide
    return {
      provide: {
        lenis,
        gsap,
        ScrollTrigger,
        Draggable,
      },
    };
  }
});
