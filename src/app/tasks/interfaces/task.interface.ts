/**
 * Interfaz de una tarea.
 * Modela todos los atributos necesarios de la entidad
 */
export interface Task {
    id: number;
    name: string;
    description: string;
    icon: string;
    status: 'To-do' | 'In progress' | 'Completed' | 'Won\'t do';
}