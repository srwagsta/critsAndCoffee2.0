from django.core.management.base import BaseCommand
from crits_and_coffee.taskapp.tasks import retrieve_recent_media


class Command(BaseCommand):
    help = 'Gathers the latest instagram posts, this is mostly for initial Docker, local builds, and testing'

    def handle(self, *args, **options):
        retrieve_recent_media.delay()
