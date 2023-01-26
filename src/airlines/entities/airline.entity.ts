  import { Entity, Column, PrimaryGeneratedColumn} from "typeorm";
    

@Entity()
  export class Airlines {

    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    code: number;
    @Column()
    name: string;

    @Column()
    nameBangla:string;

    @Column()
    commission: number;
 


}













