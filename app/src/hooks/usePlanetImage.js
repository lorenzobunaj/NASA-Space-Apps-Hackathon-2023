import { useState, useEffect } from "react";

const url = 'https://planet-render-production.up.railway.app/api/v1/'

const usePlanetImage = (planetQuery, prompt) => {
    const [isLoadingImage, setIsLoadingImage] = useState(true);
    const [isErrorImage, setIsErrorImage] = useState(false);
    const [planetImageUrl, setPlanetImageUrl] = useState('');

    useEffect(() => {
        (fetchData)(planetQuery, prompt, setIsLoadingImage, setIsErrorImage, setPlanetImageUrl);
    }, [prompt, planetQuery]);

    return { isLoadingImage, isErrorImage, planetImageUrl };
}

const fetchData = async (planetQuery, prompt, setIsLoadingImage, setIsErrorImage, setPlanetImageUrl) => {
    setIsErrorImage(false);
    setIsLoadingImage(true);
    try {
        const source = `${url}/'${planetQuery.name}'/image`;

        // fetch the add api
        const response = await fetch(source, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: 'image-alpha-001',
                prompt: prompt,
                num_images: 5,
                size: '256x256',
                response_format: 'url',
            })
        });

        const data = await response.json();
        console.log(data)

        setPlanetImageUrl(data.data.data)

    } catch (err) {
        console.log(err);
        setIsErrorImage(true);
    }
    setIsLoadingImage(false);
};

export { usePlanetImage };