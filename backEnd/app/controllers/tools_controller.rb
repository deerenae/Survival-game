class ToolsController < ApplicationController
    def index
        tools = Tool.all 
        render json: tools 
    end
    def show
        tool = Tool.find(params[:id])
        render json: tool
    end
    def create
        tool = Tool.create(
            name: params[:name],
            rating: params[:rating],
            image: params[:image]
        )
        render json: tool 
    end
    def update
        tool = Tool.find(params[:id])
        tool.update(
            name: params[:name],
            rating: params[:rating],
            image: params[:image]
        )
    end
    def destroy
        tool = Tool.find(params[:id])
        tool.destroy
    end
end
