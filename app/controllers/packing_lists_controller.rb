class PackingListsController < ApplicationController
	def index
		@packing_list = PackingList.all
	end
end
