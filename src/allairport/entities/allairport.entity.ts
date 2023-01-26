import { Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Allairport {
     @PrimaryGeneratedColumn()
      id:number;

      @Column()
      code:number;

      @Column()
      name:number;

      @Column()
      city:number;

      @Column()
      country:number;


}
