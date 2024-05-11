class CreateEnPosts < ActiveRecord::Migration[7.1]
  def change
    create_table :en_posts do |t|
      t.string :title
      t.string :category
      t.string :desc
      t.text :content
      t.references :post, null: false, foreign_key: true

      t.timestamps
    end
  end
end
