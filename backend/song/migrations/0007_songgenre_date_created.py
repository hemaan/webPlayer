# Generated by Django 3.0.6 on 2020-07-05 17:32

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('song', '0006_auto_20200616_1244'),
    ]

    operations = [
        migrations.AddField(
            model_name='songgenre',
            name='date_created',
            field=models.DateTimeField(auto_now_add=True, default=datetime.datetime(2020, 7, 5, 17, 32, 39, 892440, tzinfo=utc)),
            preserve_default=False,
        ),
    ]
