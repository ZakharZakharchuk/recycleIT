import PET from '../../assets/PET.png'
import HDPE from '../../assets/HDPE.png'
import PVC from '../../assets/PVC.png'
import LDPE from '../../assets/LDPE.png'
import PP from '../../assets/PP.png'
import PS from '../../assets/PS.png'
import Household from '../../assets/Household.png'
import CardBoard from '../../assets/CardBoard.png'
import Confidencial from '../../assets/Confidencial.png'
import ColoredGlass from '../../assets/ColoredGlass.png'
import ColorlessGlass from '../../assets/ColorlessGlass.png'
import Ferrous from '../../assets/Ferrous.png'
import NonFerrous from '../../assets/NonFerrous.png'
import TV from '../../assets/TV.png'
import recycleElectronic2 from '../../assets/recycleElectronic2.png'
import recycleElectronic1 from '../../assets/recycleElectronic1.png'
import glass from '../../assets/glass.png'
import metal from '../../assets/metal.png'
import electronic from '../../assets/electronic.jpg'

const data: {category: string, id:string, title:string, desc:string, image:string, value: string}[] = [
    {
        "id": "1",
        "title": "PET/PTE",
        "category": "plastic",
        "desc": "Single-use bottles",
        "image": PET,
        "value": '1',
    },
    {
        "id": "2",
        "title": "HDPE",
        "category": "plastic",
        "desc": "Packaging",
        "image": HDPE,
        "value": '1',
    },
    {
        "id": "3",
        "title": "PVC",
        "category": "plastic",
        "desc": "Drain pipes or playground equipment",
        "image": PVC,
        "value": '1',
    },
    {
        "id": "4",
        "title": "LDPE",
        "category": "plastic",
        "desc": "Flexible plastic - tubes and bags",
        "image": LDPE,
        "value": '1',
    },
    {
        "id": "5",
        "title": "PP",
        "category": "plastic",
        "desc": "Containers for hot liquids, bottle caps",
        "image": PP,
        "value": '1',
    },
    {
        "id": "6",
        "title": "PS",
        "category": "plastic",
        "desc": "Disposable plates and cups, takeway containers",
        "image": PS,
        "value": '1',
    },
    {
        "id": "7",
        "title": "Household waste paper",
        "category": "paper",
        "desc": "Newspapers, printer paper, magazines, junk mail",
        "image": Household,
        "value": '2',
    },
    {
        "id": "8",
        "title": "Cardboard waste (OCC)",
        "category": "paper",
        "desc": "Brown corrugated cardboard",
        "image": CardBoard,
        "value": '2',
    },
    {
        "id": "9",
        "title": "Confidencial papers",
        "category": "paper",
        "desc": "Sredded documents",
        "image": Confidencial,
        "value": '2',
    },
    {
        "id": "10",
        "title": "Colored glass",
        "category": "glass",
        "desc": "Colored bottles",
        "image": ColoredGlass,
        "value": '3',
    },
    {
        "id": "11",
        "title": "Colorless glass",
        "category": "glass",
        "desc": "Transparent bottles",
        "image": ColorlessGlass,
        "value": '3',
    },
    {
        "id": "12",
        "title": "Types of glass",
        "category": "glass",
        "desc": " Bottles and Jars of any colour,Cosmetics and perfume containers",
        "image": glass,
        "value": '3',
    },
    {
        "id": "13",
        "title": "Ferrous metals",
        "category": "metal",
        "desc": "Refrigerators, ovens, cars",
        "image": Ferrous,
        "value": '4'
    },
    {
        "id": "14",
        "title": "Metal Cans",
        "category": "metal",
        "desc": "Drink cans or tin, steel, or bi-metal food cans.",
        "image": NonFerrous,
        "value": '4'
    },
    {
        "id": "15",
        "title": "Car",
        "category": "metal",
        "desc": "Vehicles and cars",
        "image": metal,
        "value": '4'
    },
    {
        "id": "16",
        "title": "Plata",
        "category": "electronic",
        "desc": "Plata and Battery",
        "image": recycleElectronic1,
        "value": '5'
    },
    {
        "id": "17",
        "title": "E-waste",
        "category": "electronic",
        "desc": " Laptops, tablets and mobile phones.",
        "image": recycleElectronic2,
        "value": '5'
    },
    {
        "id": "18",
        "title": "Recycle TVs",
        "category": "electronic",
        "desc": "TVs contain valuable materials.",
        "image": TV,
        "value": '5'
    }
]
export default data