import enum


class UserRoles(enum.Enum):
    QUANT_READ = ['quant-read']
    INSTAGRAM_READ = ['instagram-read']
    DEFAULT = QUANT_READ + INSTAGRAM_READ
    ADMIN = DEFAULT + ['admin']
    ROOT = ADMIN + ['root']
