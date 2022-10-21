class Api::V1::MessageController < ApplicationController
    def index
        @message = Message.order("RANDOM()").first
        respond_to do |format|
        format.html # index.html.erb
        format.xml  { render :xml => @message.message }
        format.json { render :json => @message.message }
        end
    end
end

