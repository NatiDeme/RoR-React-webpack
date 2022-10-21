class Api::V1::MessageController < ApplicationController
    def index
        @message = Message.all
        respond_to do |format|
        format.html # index.html.erb
        format.xml  { render :xml => @messages }
        format.json { render :json => @messages }
    end
end

