import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

export enum UserRole {
    ADMIN = "admin",
    EDITOR = "editor",
    DEFAULT = "default"
}

@Entity()
export class User {

    @PrimaryGeneratedColumn()
        id: number;

    @Column()
        firstName: string;

    @Column()
        lastName: string;

    @Column()
        email: string;

    @Column()
        password: string;

    @Column()
        age: number;

    @Column({
        type: 'enum',
        enum: UserRole,
        default: UserRole.DEFAULT
    })
        role: UserRole;

    @Column({
        default: false
    })
        isActive: boolean;

    @CreateDateColumn()
        createdAt: Date;

    @UpdateDateColumn()
        updatedAt: Date;

}
