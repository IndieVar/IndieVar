class CreateMessages < ActiveRecord::Migration[7.1]
  def change
    create_table :messages do |t|
      t.string :name
      t.string :email
      t.text :text
      t.boolean :viewed, default: false

      t.timestamps
    end
  end
end
