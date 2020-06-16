# Generated by Django 3.0.6 on 2020-06-16 12:06

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('song', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Genere',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='SongGenere',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('genere', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='song.Genere')),
                ('song', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='song.Song')),
            ],
        ),
        migrations.AddField(
            model_name='song',
            name='genere',
            field=models.ManyToManyField(to='song.Genere'),
        ),
    ]
