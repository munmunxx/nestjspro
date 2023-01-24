import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";



@Entity()
export class Activitylog {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    agentid:string;
    @Column()
    ref:string;
    @Column()
    status:string;

    @Column()
    actionRef:string;
    
    @Column()
    actionBy:string;

    @Column()
    remarks:string;


   @Column()
   platform:string;

   @Column()
   actionAt:string;
}
