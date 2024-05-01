class CreatePosts < ActiveRecord::Migration[7.1]
  def change
    create_table :posts do |t|
      t.string :title
      t.string :desc
      t.string :category
      t.text :content
      t.string :cover
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
