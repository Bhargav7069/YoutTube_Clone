export const API_KEY = "AIzaSyDzfJgvYuIYs2oUomC039iA8z5BC6qrszQ";   

export const value_converter = (value) => {
    if(value>=1000000)
    {
        return Math.floor(value/1000000)+"M";
    }
    else if(value>=1000)
    {
        return Math.floor(value/1000)+"K";
    }
    else
    {
        return value;
    }
}