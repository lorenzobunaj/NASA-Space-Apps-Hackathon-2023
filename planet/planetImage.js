const planetImage = async (planetData) => {
    const prompt = planetData.prompt;
    console.log(prompt);

    const API_KEY = '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';
    const openaiUrl = 'https://api.openai.com/v1/images/generations';
      
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${API_KEY}`,
    };
      
    const data = {
        model: 'image-alpha-001',
        prompt,
        num_images: 6,
        size: '256x256',
        response_format: 'url',
    };
    
    // fetch the add api
    const response = await fetch(openaiUrl, {
        method: "POST",
        headers,
        body: JSON.stringify(
            data
        )
    });
    const image = await response.json();

    return image;
};

module.exports = planetImage;