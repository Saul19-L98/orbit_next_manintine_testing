import { create } from 'zustand';

type StepStore = {
    active: number;
    experience : string;
    setActive: (step: number) => void;
    setActiveFromStepChange: (step: number) => void;
    setExperience : (options: string) => void;
};

export const useStepStore = create<StepStore>((set) => ({
    active: 0,
    experience: '',
    setActive: (step: number) => set((state) => ({ active: step })),
    setActiveFromStepChange: (step: number) =>
        set((state) => ({ active: step - 1 })),
    setExperience: (experience: string) => set((state) => ({ experience: experience })),
}));