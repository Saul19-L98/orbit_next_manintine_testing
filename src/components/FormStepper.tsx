import { useStepStore } from '@/store/stepStore';
import StepWizard from 'react-step-wizard';
import Step1 from './forms/Step1';
import Step2 from './forms/Step2';
import Image from 'next/image';
import {createStyles,Box} from "@mantine/core";

const useStyles = createStyles(() => ({
    boxWithImage: {
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '70vh',
        padding: '0 2rem',
    },
    image: {
        position: 'absolute',
        zIndex: -1,
        objectFit: 'cover',
    },
    container:{
        width:'70%',
    }
}));


function StepWizardForm() {
    const {setActiveFromStepChange} = useStepStore();
    const {classes} = useStyles();
    return (
        <Box mx='auto' maw='auto' className={classes.boxWithImage}>
            <Image
                src='/BackgroundForm.jpg'
                alt="Background image"
                className={classes.image}
                fill
                priority
            />
            <StepWizard onStepChange={({ activeStep }) => setActiveFromStepChange(activeStep)} className={classes.container}>
                <Step1 nextStep={()=>{}} />
                <Step2 previousStep={()=>{}} />
            </StepWizard>
        </Box>
    );
}

export default StepWizardForm;