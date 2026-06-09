import {product} from '../model/product.schema.js'
export const createNewProduct = async(req, res) => {
    const data = req.body;
    await product.create(data)
    
    
    //  Yeh aapka data terminal mein dikhayega
    console.log("Mera data:", data); 

    //  Yeh response sahi se bhejega bina server crash kiye
    res.json({
        massage: 'add new product',
        receivedData: data,
        data:data
    });
};

export const getAllProduct = (req, res)=>{
res.json({massage:'prosuct end point call'});
}

export const getProductById = (req, res)=>{
res.json({massage:'single prosuct end point call'});
}
export const updateProduct = (req, res)=>{
res.json({massage:'update prosuct end point call'});
}
export const deleteProduct = (req, res)=>{
res.json({massage:'delete prosuct end point call'});
}