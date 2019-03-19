from django.core.management.base import BaseCommand
from API_InstagramPosts.helpers import retrieve_recent_media

class Command(BaseCommand):
    help = 'Gathers the latest instagram posts, this is mostly for initial Docker, local builds, and testing'

    def handle(self, *args, **options):
        if retrieve_recent_media():
            self.stdout.write(self.style.SUCCESS(f'****Successfully retrieved recent Instagram posts****'))
        else:
            self.stdout.write(self.style.ERROR(f'****Unable to retrieve recent Instagram posts****'))
