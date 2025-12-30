import { create } from "zustand";

const useMacBookStore = create((set) => ({
    color: '#adb5bd',
    setColor: (color) => set({color}),

    scale: 0.06,
    setScale: (scale) => set({scale}),

    texture: '/public/videos/feature-1.mp4',
    setTexture: (texture) => set({texture}),

    reset: () => set({color: '#adb5bd', scale: 0.06, texture: '/public/videos/feature-1.mp4'})
}))

export default useMacBookStore;