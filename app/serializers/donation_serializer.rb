class DonationSerializer < ActiveModel::Serializer
  attributes :id, :amount, :created_at, :recipient_id
  belongs_to :recipient
  belongs_to :user
end
