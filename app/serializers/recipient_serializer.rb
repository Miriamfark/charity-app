class RecipientSerializer < ActiveModel::Serializer
  attributes :id, :name, :category, :fundraising_goal, :logo, :description

  has_many :donations
  has_many :users
end
