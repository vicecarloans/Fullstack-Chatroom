server_node_modules: ./server/package.json ./server/yarn.lock
			cd server && yarn install
client_node_modules: ./client/package.json ./client/yarn.lock
			cd client && yarn install

@PHONY: kill
kill: .
	lsof -ti:3000 | xargs kill && lsof -ti:5000 | xargs kill

@PHONY: server
server: server_node_modules
		cd server && yarn run dev &

@PHONY: client
client: client_node_modules 
		cd client && yarn start &


@PHONY: start
start: server_node_modules \
	   client_node_modules 
	   cd server && yarn run prod &


@PHONY: dev
dev: kill  \
	 server \
	 client
	 