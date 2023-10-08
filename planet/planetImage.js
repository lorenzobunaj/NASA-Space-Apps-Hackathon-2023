const planetImage = async (planetData) => {
    const prompt = planetData.prompt;

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