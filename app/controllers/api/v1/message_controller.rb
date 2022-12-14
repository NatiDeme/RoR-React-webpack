# frozen_string_literal: true

module Api
  module V1
    class MessageController < ApplicationController
      def index
        @message = Message.order('RANDOM()').first
        respond_to do |format|
          format.html # index.html.erb
          format.xml { render xml: @message.message }
          format.json { render json: @message.message }
        end
      end
    end
  end
end
