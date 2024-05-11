class CreatePosts < ActiveRecord::Migration[7.1]
  def change
    create_table :posts do |t|
      t.string :cover
      t.references :user, null: false, foreign_key: true
      t.integer :views, default: 0

      t.timestamps
    end
  end
end
