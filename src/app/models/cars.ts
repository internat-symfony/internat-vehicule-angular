export interface Cars {
    id:number;
    image: string;
    name: string;
    price: string;
}

export class CarsService{
    private car:Cars={
    id: 0,
    name:'',
    image:'',
    price: '',
    }
}