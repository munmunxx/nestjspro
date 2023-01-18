import { Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Airports {

    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    code: number;
    @Column()
    name: string;
    @Column()
    cityCode: string;
    @Column()
    cityName:string;
    @Column()
    countryName: string;
    @Column()
    countryCode:string;
    @Column()
	timezone:string;
    @Column()
    lat:string;
    @Column()
    lon:string;
    @Column()
    numofairport:number;

    @Column()

   city:boolean;


}
