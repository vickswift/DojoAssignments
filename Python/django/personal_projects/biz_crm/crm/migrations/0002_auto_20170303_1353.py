# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-03-03 13:53
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('crm', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='expenditure',
            old_name='plastation_expenses',
            new_name='playstation_expenses',
        ),
        migrations.RenameField(
            model_name='expenditure',
            old_name='plastation_sales',
            new_name='playstation_sales',
        ),
    ]