import { Entity, PrimaryGeneratedColumn, Unique, Column } from 'typeorm';
import { IsString, IsInt, IsNotEmpty } from 'class-validator';
@Entity()
@Unique(['id'])
export class Student {
    @PrimaryGeneratedColumn()
    @IsInt()
    id: number;

    @Column()
    @IsString()
    @IsNotEmpty()
    name : string;

    @Column()
    @IsString()
    @IsNotEmpty()
    message : string;


}

