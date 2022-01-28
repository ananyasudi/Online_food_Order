import BasicSelect from "./Select_UV";
import FormPropsTextFields from './Register';
import SignIn from "./login";


export default function Home(){
    return(
        <div>
            <h1>This is home page:)</h1>
            <h2>Already registered?</h2>
            {/* login */}
            <SignIn></SignIn>
            <FormPropsTextFields></FormPropsTextFields>
            {/* <BasicSelect></BasicSelect> */}

        </div>
    )
}