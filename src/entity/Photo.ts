import { Entity, Column ,ObjectIdColumn, Unique} from "typeorm";
// @Unique("UQ_NAME", ["name"])
// @Unique("UQ_FILENAME", ["filename"])
@Entity()
export class Photo {
  @ObjectIdColumn()
   id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  filename: string;

  @Column()
  views: number;

  @Column()
  isPublished: boolean;
}
