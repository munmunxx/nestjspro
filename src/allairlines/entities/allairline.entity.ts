import { Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Allairlines {

 @PrimaryGeneratedColumn()
    id:number;
    @Column()
    code:string;
  @Column()
    name:string;
  @Column()
    comission:number;




    
}
