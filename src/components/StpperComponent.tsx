import { Stepper} from '@mantine/core';
import { useStepStore } from '../store/stepStore';
import { createStyles } from '@mantine/core';

const useStyles = createStyles(() => ({
    stepper: {
        fontSize: '3rem',
        margin: '3rem 2rem',
    }
}));

function StpperComponent() {
    const { active,setActive } = useStepStore();
    const {classes} = useStyles();
    return (
        <>
            <Stepper active={active} onStepClick={setActive} className={classes.stepper}>
                <Stepper.Step label="Start">
                </Stepper.Step>
                <Stepper.Step label="Contact Information" />
                <Stepper.Completed>
                </Stepper.Completed>
            </Stepper>
        </>
    );
}

export default StpperComponent;