class UserSerializer < ActiveModel::Serializer
  attributes :id, :username

  has_many :recipients
  has_many :donations
end
