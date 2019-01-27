Running locally and testing with Docker
======================================

Management commands
-------------------

Sometimes it may be important to use the django management functionality to create new apps, 
collect static files, or define new super users!  

**Migrating Changes to DB**

```bash
docker-compose -f local.yml run --rm django python manage.py migrate
```

**Creating New Superuser**

```bash
docker-compose -f local.yml run --rm django python manage.py createsuperuser
```

**Starting a New App**

```bash
docker-compose -f local.yml run --rm django python manage.py startapp <app name>
```
**Collect Static Files**

```bash
docker-compose -f local.yml run --rm django python manage.py collectstatic
```

---

Testing
-------

**pytest *with optional app targeting***

```bash
docker-compose -f local.yml run django pytest <path-to-app-in-project/app>
```

*With coverage and reporting*

```bash
docker-compose -f local.yml run django coverage run -m pytest
docker-compose -f local.yml run django coverage report
```
