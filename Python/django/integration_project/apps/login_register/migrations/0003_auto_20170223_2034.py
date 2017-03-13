# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-02-23 20:34
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('login_register', '0002_auto_20170223_0355'),
    ]

    operations = [
        migrations.RenameField(
            model_name='user',
            old_name='name',
            new_name='first_name',
        ),
        migrations.AddField(
            model_name='user',
            name='dob',
            field=models.DateField(null=True),
        ),
        migrations.AddField(
            model_name='user',
            name='email',
            field=models.EmailField(max_length=255, null=True),
        ),
        migrations.AddField(
            model_name='user',
            name='last_name',
            field=models.CharField(max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='user',
            name='password',
            field=models.CharField(max_length=200),
        ),
        migrations.AlterField(
            model_name='user',
            name='username',
            field=models.CharField(max_length=200, null=True),
        ),
    ]
