sudo docker exec gorgeous-golden-backend /usr/bin/mysqldump -u $GG_DB_USER --password=$GG_DB_PASSWORD $GG_DB_NAME | gzip > backup.sql.gz
git pull
docker build -t backend .
docker-compose down
docker-compose up -d