import { useStepStore } from '@/store/stepStore';
import StepWizard from 'react-step-wizard';
import Step1 from './forms/Step1';
import Step2 from './forms/Step2';

function StepWizardForm() {
    const {setActiveFromStepChange} = useStepStore();

    return (
        <StepWizard onStepChange={({ activeStep }) => setActiveFromStepChange(activeStep)}>
            <Step1 nextStep={()=>{}} />
            <Step2 previousStep={()=>{}} />
        </StepWizard>
    );
}

export default StepWizardForm;