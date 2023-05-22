import { useLottie }  from "lottie-react";
import CircleLoader from '../../assets/loaders/Loader.json';

export const Loader = () => {

    const options = {
        animationData: CircleLoader,
        loop: true,
        style: {
            height: 200
        }
    };

      
    const { View } = useLottie(options);

    return (
        <div
            className="loader-container"
        >
            <div
                className="d-flex flex-column justify-content-center align-items-center" 
            >
                {View}
                <p className="text-loader">Loading...</p>
            </div>
        </div>        
    )
}
