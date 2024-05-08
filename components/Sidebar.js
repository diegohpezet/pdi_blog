import React from 'react';
import Link from 'next/link';
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import getFileMetadata from '@/utils/getFileMetadata';


export default function Sidebar() {
  const lessonsMetadata = getFileMetadata('media/lessons');

  // Divide lessons by category
  const baseLessons = lessonsMetadata.filter((lesson) => lesson.topic == "Conceptos Base");
  const projectLessons = lessonsMetadata.filter((lesson) => lesson.topic == "Proyecto");
  const designLessons = lessonsMetadata.filter((lesson) => lesson.topic == "Diseño");
  const implementationLessons = lessonsMetadata.filter((lesson) => lesson.topic == "Implementación");

  return (
    <nav className='text-white p-2'>
      <h1>PDI Blog</h1>
      <section>
        <span>Clases</span>
        <ul className="list-unstyled">
          <li>
            <button className="btn text-white btn-toggle align-items-center rounded" data-bs-toggle="collapse" data-bs-target="#base-collapse" aria-expanded="true">
              <IoIosArrowForward />Conceptos Base
            </button>
          </li>
          <div className="collapse" id="base-collapse">
            <ul className="btn-toggle-nav fw-normal pb-1 small ms-3">
              {baseLessons.map((lesson) => {
                return (
                  <li className="pb-1">
                    <Link href={`/lessons/${lesson.slug}`} className="d-inline-flex text-decoration-none rounded text-white">
                      {lesson.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <li>
          <button className="btn text-white btn-toggle align-items-center rounded" data-bs-toggle="collapse" data-bs-target="#proyecto-collapse" aria-expanded="true">
              <IoIosArrowForward />Proyecto
            </button>
          </li>
          <div className="collapse" id="proyecto-collapse">
            <ul className="btn-toggle-nav fw-normal pb-1 small ms-3">
              {projectLessons.map((lesson) => {
                return (
                  <li className="pb-1">
                    <Link href={`/lessons/${lesson.slug}`} className="d-inline-flex text-decoration-none rounded text-white">
                      {lesson.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <li>
          <button className="btn text-white btn-toggle align-items-center rounded" data-bs-toggle="collapse" data-bs-target="#diseño-collapse" aria-expanded="true">
              <IoIosArrowForward />Diseño
            </button>
          </li>
          <div className="collapse" id="diseño-collapse">
            <ul className="btn-toggle-nav fw-normal pb-1 small ms-3">
              {designLessons.map((lesson) => {
                return (
                  <li className="pb-1">
                    <Link href={`/lessons/${lesson.slug}`} className="d-inline-flex text-decoration-none rounded text-white">
                      {lesson.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <li>
          <button className="btn text-white btn-toggle align-items-center rounded" data-bs-toggle="collapse" data-bs-target="#implementacion-collapse" aria-expanded="true">
              <IoIosArrowForward />Implementación
            </button>
          </li>
          <div className="collapse" id="implementacion-collapse">
            <ul className="btn-toggle-nav fw-normal pb-1 small ms-3">
              {implementationLessons.map((lesson) => {
                return (
                  <li className="pb-1">
                    <Link href={`/lessons/${lesson.slug}`} className="d-inline-flex text-decoration-none rounded text-white">
                      {lesson.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </ul>
      </section>
      <section>
        <span>Tareas</span>
        <ul className="list-unstyled ps-0">
          <li className="mb-1">
          <button className="btn text-white btn-toggle align-items-center rounded" data-bs-toggle="collapse" data-bs-target="#tareas-collapse" aria-expanded="true">
              <IoIosArrowForward />Listado de tareas
            </button>
          </li>
          <div className="collapse" id="tareas-collapse">
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small ms-5">
              <li>
              <a href="#" className="d-inline-flex text-decoration-none rounded text-white">
                  Sistemas Computacionales
                </a>
              </li>
            </ul>
          </div>
        </ul>
      </section>
      <section>
        <span>Temas</span>
      </section>
    </nav>
  );
}
