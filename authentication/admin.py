from django.contrib import admin
from .models import User


class UserAdmin(admin.ModelAdmin):
    model = User
    list_display = ('numero_agent',)
    list_filter = ('numero_agent',)
    fieldsets = (
        (None, {'fields': ('numero_agent', 'password')}),
    )
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('numero_agent', 'password1', 'password2')}
         ),
    )
    search_fields = ('numero_agent',)
    ordering = ('numero_agent',)

admin.site.register(User, UserAdmin)