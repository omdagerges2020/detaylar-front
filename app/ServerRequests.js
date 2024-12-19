const mainUrl = 'http://192.168.1.117/detaylar/api'


export const getDataCollections = async()=>{
    const request = await fetch('http://192.168.1.117/detaylar/api/getCategories', {
        headers: {
            "token": "RuQChqz2FqJkP6wMAQiVlLx5OTRIXAPPWEB",
            "Content-Type": "application/json",
          },
    })
    const response = await request.json();
    return response;
}

