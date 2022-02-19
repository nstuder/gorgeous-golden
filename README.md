# Official Website www.gorgeous-golden.de

Static Website using Gatsby.js and Strapi as CMS


## Development

### install Dependencies

```bash
cd frontend
npm install 
cd ../cms
npm install
```

### run cms

```bash
cd cms
npm run develop
```

> all CMS Types must exist before Frontend build.

### run frontend
```bash
cd frontend
npm run develop
```

## Docker build

### build docker image

```bash
docker build -t backend .
```

### Docker Compose

```bash
cp .env.example .env
docker-compose up
```