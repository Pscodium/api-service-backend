import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from 'typeorm';

@Entity()
export class Color {

    @PrimaryGeneratedColumn()
        id: number;

    @Column('varchar')
        db_color_name: string;

    @Column('varchar')
        color_name: string;

    @Column({
        default: '#000000'
    })
        hex: string;

    @Column('simple-array')
        rgb: number[];

    @CreateDateColumn()
        createdAt: Date;

    @UpdateDateColumn()
        updatedAt: Date;

}
